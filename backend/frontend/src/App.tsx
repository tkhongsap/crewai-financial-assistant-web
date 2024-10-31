import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  Container,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { AnalysisForm } from './components/AnalysisForm';
import { StatusDisplay } from './components/StatusDisplay';
import { ResultDisplay } from './components/ResultDisplay';
import { Header } from './components/Header';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

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
      
      setResult(data.result);
      setStatus('complete');
    } catch (error) {
      setStatus('error');
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Container maxW="container.xl" py={10}>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            <VStack spacing={8}>
              <AnalysisForm onSubmit={handleAnalysis} isLoading={status === 'analyzing'} />
              <StatusDisplay status={status} />
            </VStack>
            <ResultDisplay result={result} />
          </Grid>
        </Container>
      </Box>
    </ChakraProvider>
  );
}; 