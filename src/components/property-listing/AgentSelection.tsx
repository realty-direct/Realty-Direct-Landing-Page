'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

// Mock data for agents - in a real app this would come from an API
const mockAgents = [
  {
    id: '1',
    name: 'Emma Thompson',
    image: '/assets/images/agents/agent1.jpg',
    specialty: 'Residential',
    areas: ['Gold Coast', 'Brisbane South'],
    experience: '10 years'
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: '/assets/images/agents/agent2.jpg',
    specialty: 'Commercial',
    areas: ['Brisbane CBD', 'Sunshine Coast'],
    experience: '8 years'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    image: '/assets/images/agents/agent3.jpg',
    specialty: 'Luxury Properties',
    areas: ['Gold Coast', 'Brisbane North'],
    experience: '12 years'
  }
];

type AgentSelectionProps = {
  onSelect: (agentId: string | null) => void;
  onBack: () => void;
  onNext: () => void;
  selectedAgentId?: string | null;
};

export const AgentSelection = ({
  onSelect,
  onBack,
  onNext,
  selectedAgentId = null,
}: AgentSelectionProps) => {
  const t = useTranslations('PropertyListing');
  const [useAgent, setUseAgent] = useState<boolean>(selectedAgentId !== null);
  
  const handleAgentSelectionToggle = (value: boolean) => {
    setUseAgent(value);
    if (!value) {
      onSelect(null);
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-8">
        {/* Agent selection option */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold mb-2">{t('agent_selection_title')}</h3>
          <p className="text-gray-600 mb-4">{t('agent_selection_description')}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={() => handleAgentSelectionToggle(true)}
              className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${
                useAgent
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {useAgent && <Check className="mr-2 h-4 w-4" />}
              {t('agent_selection_yes')}
            </button>
            
            <button
              type="button"
              onClick={() => handleAgentSelectionToggle(false)}
              className={`flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${
                !useAgent
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {!useAgent && <Check className="mr-2 h-4 w-4" />}
              {t('agent_selection_no')}
            </button>
          </div>
        </div>
        
        {/* Agent list (only visible if useAgent is true) */}
        {useAgent && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('select_agent')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockAgents.map((agent) => (
                <div
                  key={agent.id}
                  onClick={() => onSelect(agent.id)}
                  className={`border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow ${
                    selectedAgentId === agent.id ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0">
                      {/* In a real app, this would be an actual image */}
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 font-bold">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold">{agent.name}</h4>
                      <p className="text-sm text-gray-600">{agent.specialty}</p>
                      <p className="text-sm text-gray-600">{agent.areas.join(', ')}</p>
                      <p className="text-sm text-gray-600">{agent.experience}</p>
                    </div>
                    {selectedAgentId === agent.id && (
                      <div className="text-blue-600">
                        <Check className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Navigation buttons */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back_button')}
          </button>
          
          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {t('next_button')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};