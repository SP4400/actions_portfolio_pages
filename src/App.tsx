import React from 'react';
import { Github, Linkedin, Mail, Terminal, Server, Cloud, Github as Git, Database, Pocket as Docker } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <Terminal className="w-16 h-16 mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DevOps Engineer</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Automating deployment pipelines and building reliable infrastructure
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="p-2 hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="p-2 hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contact@example.com" className="p-2 hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Cloud className="w-8 h-8" />}
              title="Cloud Infrastructure"
              description="AWS, Azure, GCP, Terraform, Infrastructure as Code"
            />
            <SkillCard 
              icon={<Git className="w-8 h-8" />}
              title="CI/CD"
              description="GitHub Actions, Jenkins, GitLab CI, ArgoCD"
            />
            <SkillCard 
              icon={<Docker className="w-8 h-8" />}
              title="Containerization"
              description="Docker, Kubernetes, Container Orchestration"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="Kubernetes Cluster Automation"
              description="Automated K8s cluster deployment with Terraform and GitHub Actions"
              tags={["Kubernetes", "Terraform", "GitHub Actions"]}
            />
            <ProjectCard 
              title="Microservices Pipeline"
              description="CI/CD pipeline for microservices architecture using ArgoCD"
              tags={["ArgoCD", "Docker", "Microservices"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 DevOps Portfolio. Built with React and TailwindCSS.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;