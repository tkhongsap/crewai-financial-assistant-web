import { Box, Text } from '@chakra-ui/react';

interface ResultDisplayProps {
  result: string;
}

export const ResultDisplay = ({ result }: ResultDisplayProps) => {
  // Try to parse the result as JSON if it's a JSON string
  const formatResult = (rawResult: string) => {
    try {
      const parsed = JSON.parse(rawResult);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return rawResult;
    }
  };

  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="white"
      shadow="sm"
      border="1px"
      borderColor="gray.200"
      height="800px"
      overflowY="auto"
      textAlign="left"
    >
      {result ? (
        <Box 
          whiteSpace="pre-wrap" 
          fontSize="md" 
          fontFamily="monospace"
          p={4}
        >
          {formatResult(result)}
        </Box>
      ) : (
        <Text color="gray.500">Analysis results will appear here...</Text>
      )}
    </Box>
  );
}; 