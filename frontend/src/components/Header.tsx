import { Box, Heading, Text, Stack, Badge } from '@chakra-ui/react';

export const Header = () => (
  <Box
    bg="linear-gradient(135deg, #2e7bcf, #1a4f8a)"
    color="white"
    py={6}
    px={4}
    borderRadius="lg"
    shadow="md"
  >
    <Heading as="h1" size="xl" mb={2}>
      💼 AI Financial Analysis Crew
    </Heading>
    <Text fontSize="lg" mb={4}>
      Powered by CrewAI - Your Advanced Financial Analysis Assistant
    </Text>
    <Stack direction="row" spacing={2} justify="center" flexWrap="wrap">
      <Badge colorScheme="blue" p={2} borderRadius="lg">
        📊 Financial Research
      </Badge>
      <Badge colorScheme="blue" p={2} borderRadius="lg">
        📈 Data Analysis
      </Badge>
      <Badge colorScheme="blue" p={2} borderRadius="lg">
        📝 Report Generation
      </Badge>
    </Stack>
  </Box>
); 