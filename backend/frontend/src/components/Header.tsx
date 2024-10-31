import { Box, Heading, Text, HStack, Tag } from '@chakra-ui/react';

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
    <HStack spacing={2} justify="center" wrap="wrap">
      <Tag size="lg" colorScheme="blue" variant="solid">
        📊 Financial Research
      </Tag>
      <Tag size="lg" colorScheme="blue" variant="solid">
        📈 Data Analysis
      </Tag>
      <Tag size="lg" colorScheme="blue" variant="solid">
        📝 Report Generation
      </Tag>
    </HStack>
  </Box>
); 