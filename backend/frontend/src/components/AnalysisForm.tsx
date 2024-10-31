import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
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
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Analysis Topic</FormLabel>
          <Input
            name="topic"
            placeholder="e.g., NVIDIA Financial Report Analysis"
            value={formData.topic}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Financial Period</FormLabel>
          <Input
            name="financial_period"
            placeholder="e.g., Q4 2024"
            value={formData.financial_period}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Analysis Focus Areas</FormLabel>
          <Textarea
            name="focus_areas"
            placeholder="e.g., Revenue Growth, Profit Margins, Debt Levels, Market Expansion"
            value={formData.focus_areas}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Analysis Objectives</FormLabel>
          <Textarea
            name="objectives"
            placeholder="e.g., Summarize key highlights, identify strengths and weaknesses"
            value={formData.objectives}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          size="lg"
          isLoading={isLoading}
          loadingText="Analyzing..."
        >
          🚀 Run Analysis
        </Button>
      </VStack>
    </form>
  );
}; 