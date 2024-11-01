import { Box, Text } from '@chakra-ui/react';

interface ResultDisplayProps {
  result: string;
}

export const ResultDisplay = ({ result }: ResultDisplayProps) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="white"
      shadow="sm"
      border="1px"
      borderColor="gray.200"
      height="930px"
      overflowY="auto"
      textAlign="left"
    >
      {result ? (
        <Box 
          whiteSpace="pre-wrap" 
          fontSize="sm"
          fontFamily="monospace"
          p={4}
        >
          {result}
        </Box>
      ) : (
        <Text color="gray.500" fontSize="sm">
          Your analysis results will appear here. The AI crew will provide a detailed report including:
          • Executive Summary
          • Key Financial Metrics
          • Market Analysis
          • Risk Assessment
          • Recommendations
        </Text>
      )}
    </Box>
  );
}; 