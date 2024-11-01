import { Box, VStack, Text, HStack } from '@chakra-ui/react';

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
      p={6}
      borderRadius="lg"
      bg="white"
      shadow="sm"
      border="1px"
      borderColor="gray.200"
      width="100%"
    >
      <VStack align="flex-start" spacing={4} width="100%">
        <Box width="100%">
          <HStack align="flex-start" spacing={3}>
            <Text width="24px" textAlign="center">{getStatusEmoji(status)}</Text>
            <Box flex="1">
              <Text fontWeight="bold" textAlign="left">Researcher:</Text>
              <Text fontSize="sm" color="gray.600" textAlign="left">
                Collecting data from financial statements, news, and market sources
              </Text>
            </Box>
          </HStack>
        </Box>
        
        <Box width="100%">
          <HStack align="flex-start" spacing={3}>
            <Text width="24px" textAlign="center">{getStatusEmoji(status)}</Text>
            <Box flex="1">
              <Text fontWeight="bold" textAlign="left">Analyst:</Text>
              <Text fontSize="sm" color="gray.600" textAlign="left">
                Processing data and performing financial analysis
              </Text>
            </Box>
          </HStack>
        </Box>
        
        <Box width="100%">
          <HStack align="flex-start" spacing={3}>
            <Text width="24px" textAlign="center">{getStatusEmoji(status)}</Text>
            <Box flex="1">
              <Text fontWeight="bold" textAlign="left">Report Writer:</Text>
              <Text fontSize="sm" color="gray.600" textAlign="left">
                Generating comprehensive financial report
              </Text>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}; 