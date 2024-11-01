import { Box, Heading, Text, Stack, Badge, VStack } from '@chakra-ui/react';

export const Header = () => (
  <Box
    bg="linear-gradient(135deg, #2e7bcf, #1a4f8a)"
    color="white"
    py={8}
    px={6}
    borderRadius="lg"
    shadow="md"
  >
    <VStack spacing={4} align="center">
      <Heading as="h1" size="xl">
        💼 AI Financial Analysis Crew
      </Heading>
      <Text fontSize="lg" textAlign="center" maxW="800px">
        Autonomous AI agents working together to analyze financial data. 
        Our AI crew researches, analyzes, and generates comprehensive reports 
        by collecting real-time data from across the internet.
      </Text>
      <Stack direction="row" spacing={3} justify="center" flexWrap="wrap">
        <Badge colorScheme="blue" p={2} borderRadius="lg">
          🔍 Autonomous Research
        </Badge>
        <Badge colorScheme="blue" p={2} borderRadius="lg">
          📊 Smart Analysis
        </Badge>
        <Badge colorScheme="blue" p={2} borderRadius="lg">
          📝 Auto Report Generation
        </Badge>
      </Stack>
    </VStack>
  </Box>
); 