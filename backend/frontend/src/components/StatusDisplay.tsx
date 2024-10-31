import { Box, VStack, Text } from '@chakra-ui/react';

interface StatusDisplayProps {
  status: string;
}

export const StatusDisplay = ({ status }: StatusDisplayProps) => {
  const getStatusEmoji = (agentStatus: string) => {
    switch (status) {
      case 'analyzing':
        return '🔄';
      case 'complete':
        return '✅';
      case 'error':
        return '❌';
      default:
        return '⏳';
    }
  };

  return (
    <Box
      p={4}
      borderRadius="lg"
      bg="white"
      shadow="sm"
      border="1px"
      borderColor="gray.200"
      width="100%"
    >
      <VStack align="stretch" spacing={2}>
        <Text>
          {getStatusEmoji(status)} <strong>Researcher:</strong>{' '}
          {status === 'analyzing' ? 'Working...' : status === 'complete' ? 'Complete' : 'Waiting'}
        </Text>
        <Text>
          {getStatusEmoji(status)} <strong>Analyst:</strong>{' '}
          {status === 'analyzing' ? 'Working...' : status === 'complete' ? 'Complete' : 'Waiting'}
        </Text>
        <Text>
          {getStatusEmoji(status)} <strong>Report Writer:</strong>{' '}
          {status === 'analyzing' ? 'Working...' : status === 'complete' ? 'Complete' : 'Waiting'}
        </Text>
      </VStack>
    </Box>
  );
}; 