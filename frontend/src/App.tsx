import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Container,
  useToast,
  extendTheme,
} from '@chakra-ui/react';
import { AnalysisForm } from './components/AnalysisForm';
import { StatusDisplay } from './components/StatusDisplay';
import { ResultDisplay } from './components/ResultDisplay';
import { Header } from './components/Header';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

// Create a custom theme
const theme = extendTheme({});

export const App = () => {
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState('');
  const toast = useToast();

  const handleAnalysis = async (formData: any) => {
    try {
      setStatus('analyzing');
      console.log('Sending request to:', `${API_URL}/api/analyze`);
      console.log('Request data:', formData);

      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
      
      if (!response.ok) {
        throw new Error(data.detail || 'Analysis failed');
      }
      
      let resultText = '';
      if (data.result) {
        if (data.result.analysis) {
          resultText = data.result.analysis;
        } else if (data.result.final_output) {
          resultText = data.result.final_output;
        } else if (data.result.raw_output) {
          resultText = data.result.raw_output;
        } else if (Array.isArray(data.result.tasks_output)) {
          resultText = data.result.tasks_output.join('\n\n');
        } else if (typeof data.result === 'string') {
          resultText = data.result;
        } else {
          resultText = JSON.stringify(data.result, null, 2);
        }
      }
      
      setResult(resultText);
      setStatus('complete');
    } catch (error: any) {
      console.error('Analysis error:', error);
      setStatus('error');
      toast({
        title: 'Error',
        description: error?.message || 'Failed to connect to the server. Please try again.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={4}>
        <Header />
        <Container maxW="container.xl" py={10}>
          <Grid 
            templateColumns={{ base: '1fr', lg: '40% 60%' }} 
            gap={{ base: 8, lg: 12 }}
          >
            <Box w="100%">
              <AnalysisForm onSubmit={handleAnalysis} isLoading={status === 'analyzing'} />
              <Box mt={6}>
                <StatusDisplay status={status} />
              </Box>
            </Box>
            <Box w="100%">
              <ResultDisplay result={result} />
            </Box>
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};
