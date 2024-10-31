import { Box, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

interface ResultDisplayProps {
  result: string;
}

export const ResultDisplay = ({ result }: ResultDisplayProps) => (
  <Box
    p={6}
    borderRadius="lg"
    bg="white"
    shadow="sm"
    border="1px"
    borderColor="gray.200"
    height="800px"
    overflowY="auto"
  >
    {result ? (
      <ReactMarkdown>{result}</ReactMarkdown>
    ) : (
      <Text color="gray.500">Analysis results will appear here...</Text>
    )}
  </Box>
); 