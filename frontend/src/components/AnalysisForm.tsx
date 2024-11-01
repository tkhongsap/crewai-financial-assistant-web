import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

interface AnalysisFormProps {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}

export const AnalysisForm = ({ onSubmit, isLoading }: AnalysisFormProps) => {
  const [formData, setFormData] = useState({
    topic: '',
    financial_period: '',
    focus_areas: '',
    objectives: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box 
      as="form" 
      onSubmit={handleSubmit} 
      width="100%"
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={6}
    >
      <VStack spacing={6} align="stretch">
        <FormControl isRequired>
          <FormLabel fontSize="sm">Analysis Topic</FormLabel>
          <Input
            name="topic"
            placeholder="e.g., Apple Inc. Quarterly Performance, Tesla Market Position, Microsoft Cloud Business"
            value={formData.topic}
            onChange={handleChange}
            size="md"
            fontSize="sm"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm">Financial Period</FormLabel>
          <Input
            name="financial_period"
            placeholder="e.g., Q4 2023, FY 2023, Last 3 Quarters"
            value={formData.financial_period}
            onChange={handleChange}
            size="md"
            fontSize="sm"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm">Analysis Focus Areas</FormLabel>
          <Textarea
            name="focus_areas"
            placeholder="e.g., Revenue Growth, Operating Margins, Market Share, R&D Spending, Debt Levels, Cash Flow, Competition Analysis"
            value={formData.focus_areas}
            onChange={handleChange}
            minH="100px"
            size="md"
            fontSize="sm"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="sm">Analysis Objectives</FormLabel>
          <Textarea
            name="objectives"
            placeholder="e.g., Assess financial health, Evaluate competitive position, Identify growth trends, Analyze risk factors, Investment potential"
            value={formData.objectives}
            onChange={handleChange}
            minH="100px"
            size="md"
            fontSize="sm"
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          size="md"
          isLoading={isLoading}
          loadingText="Analyzing..."
          py={6}
          borderWidth="1px"
          borderColor="gray.200"
          fontSize="sm"
        >
          🚀 Run Analysis
        </Button>
      </VStack>
    </Box>
  );
}; 