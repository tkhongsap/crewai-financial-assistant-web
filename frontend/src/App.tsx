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

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

// Create a custom theme
const theme = extendTheme({});

export const App = () => {
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState('');
  const toast = useToast();

  const handleAnalysis = async (formData: any) => {
    try {
      setStatus('analyzing');
      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Analysis failed');
      }
      
      setResult(typeof data.result === 'string' ? data.result : JSON.stringify(data.result, null, 2));
      setStatus('complete');
    } catch (error: any) {
      setStatus('error');
      toast({
        title: 'Error',
        description: error?.message || 'An error occurred',
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
