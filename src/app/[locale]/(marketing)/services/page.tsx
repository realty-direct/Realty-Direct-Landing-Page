export default function Services() {
  const services = [
    {
      title: 'Innovation Consulting',
      description: 'Our innovation consulting services help you identify new opportunities, develop strategies for breakthrough products, and create a culture of innovation within your organization.',
      features: [
        'Innovation workshops and ideation sessions',
        'Market and technology trend analysis',
        'R&D strategy development',
        'Innovation portfolio management',
        'Intellectual property strategy'
      ]
    },
    {
      title: 'Advanced Research',
      description: 'Leverage our expertise in scientific research to explore new technologies, validate concepts, and build a foundation for innovation with data-driven methodologies.',
      features: [
        'Literature and patent reviews',
        'Experimental design and validation',
        'Data analysis and visualization',
        'Technical feasibility studies',
        'Research partnership facilitation'
      ]
    },
    {
      title: 'Product Development',
      description: 'Transform your research findings into market-ready products with our end-to-end development services, from concept to commercialization.',
      features: [
        'Prototype development',
        'Engineering design and testing',
        'Technical specification development',
        'Manufacturing process design',
        'Quality assurance'
      ]
    },
    {
      title: 'Technical Consulting',
      description: 'Get expert advice on technology selection, architecture design, and implementation strategies for your innovation initiatives.',
      features: [
        'Technology assessment and selection',
        'Architecture design and review',
        'Technical due diligence',
        'Implementation planning',
        'Technical risk assessment'
      ]
    },
    {
      title: 'Process Optimization',
      description: 'Streamline your R&D workflows to reduce costs, accelerate time-to-market, and improve the overall efficiency of your innovation process.',
      features: [
        'R&D process analysis and mapping',
        'Bottleneck identification',
        'Workflow redesign',
        'KPI development and monitoring',
        'Continuous improvement programs'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h1>
      
      <p className="text-lg text-gray-700 mb-10">
        We provide comprehensive R&D solutions to help organizations innovate faster, 
        develop better products, and optimize their technical processes. Our services 
        are tailored to your specific needs and can be engaged individually or as an 
        integrated solution.
      </p>
      
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to accelerate your innovation?</h2>
        <p className="text-gray-700 mb-6">
          Contact us today to discuss how our R&D services can help your organization 
          achieve its innovation goals.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};