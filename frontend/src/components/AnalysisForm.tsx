import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
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
      bg="white"
      p={6}
      borderRadius="lg"
      shadow="sm"
      border="1px"
      borderColor="gray.200"
    >
      <Stack spacing={6}>
        <FormControl isRequired>
          <FormLabel fontSize="md">Analysis Topic</FormLabel>
          <Input
            name="topic"
            placeholder="e.g., NVIDIA Financial Report Analysis"
            value={formData.topic}
            onChange={handleChange}
            size="lg"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="md">Financial Period</FormLabel>
          <Input
            name="financial_period"
            placeholder="e.g., Q4 2024"
            value={formData.financial_period}
            onChange={handleChange}
            size="lg"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="md">Analysis Focus Areas</FormLabel>
          <Textarea
            name="focus_areas"
            placeholder="e.g., Revenue Growth, Profit Margins, Debt Levels, Market Expansion"
            value={formData.focus_areas}
            onChange={handleChange}
            minH="120px"
            size="lg"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontSize="md">Analysis Objectives</FormLabel>
          <Textarea
            name="objectives"
            placeholder="e.g., Summarize key highlights, identify strengths and weaknesses"
            value={formData.objectives}
            onChange={handleChange}
            minH="120px"
            size="lg"
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          isLoading={isLoading}
          loadingText="Analyzing..."
          py={7}
        >
          🚀 Run Analysis
        </Button>
      </Stack>
    </Box>
  );
}; 