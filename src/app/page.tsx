'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Cloud, Database, Github, Brain, Container, Server, ChevronRight, ArrowRight, Send, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'about' | 'work'>('about')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi there! I'm Soniya's AI assistant. How can I help you today?" }
  ])
  const [userInput, setUserInput] = useState('')

  const technologies = [
    { icon: Cloud, name: 'AWS', description: 'Built scalable cloud infrastructure for multiple projects' },
    { icon: Container, name: 'Docker', description: 'Containerized applications for consistent deployment' },
    { icon: Server, name: 'Kubernetes', description: 'Orchestrated container deployments at scale' },
    { icon: Brain, name: 'AI/ML', description: 'Developed machine learning models for real-world applications' },
    { icon: Database, name: 'Data Engineering', description: 'Created robust data pipelines and storage solutions' },
    { icon: Github, name: 'DevOps', description: 'Implemented CI/CD pipelines and automation tools' },
  ]

  const projects = [
    {
      title: "Kubernetes Security Monitoring",
      description: "I built a system to keep cloud systems secure and run smoothly. It's like having a security guard for your tech, making sure everything stays safe and sound.",
      details: "Using a combination of AWS SageMaker for anomaly detection and Prometheus for monitoring, this system keeps an eye on Kubernetes clusters 24/7. It's smart enough to spot potential security issues before they become problems, kind of like having a really attentive security team that never sleeps."
    },
    {
      title: "Real-time Image Generator",
      description: "Ever wondered what music would look like if you could see it? I created a system that turns sounds into pictures in real-time. It's pretty cool!",
      details: "This project uses OpenAI's Whisper to understand what's being said in audio, and then DALL-E helps create images that match. It's like having an artist who can instantly draw what you're talking about, but it's all done by AI."
    }
  ]

  const handleSendMessage = () => {
    if (userInput.trim() === '') return

    setMessages(prev => [...prev, { role: 'user', content: userInput }])
    setUserInput('')

    // Simulate bot response (replace with actual AI integration later)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: "Thanks for your message! I'm a simulated response for now, but Soniya is working on integrating a real AI to answer your questions." }])
    }, 1000)
  }
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#333333] font-sans">
      {currentPage === 'about' ? (
        // About Page
        <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-16 animate-fadeIn">
          <section className="max-w-3xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-[#003366]">
              Soniya Phaltane
            </h1>
            <p className="text-xl leading-relaxed">
              Hi, I'm Soniya. I build stuff with code—whether it's making things smarter with AI or helping systems run smoother with DevOps. From playing around with Python to orchestrating cloud systems, I love solving problems and making life easier through tech.
            </p>
          </section>

          <section className="max-w-4xl w-full space-y-8">
            <p className="text-lg text-center">
              I've worked with a mix of things, from cloud tech (AWS, Kubernetes, Docker) to building AI that learns from data. If it's about making systems smarter, I'm all in.
            </p>
            
            <TooltipProvider>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {technologies.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger asChild>
                      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#FFCE9E] hover:bg-[#D3A6B1]">
                        <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                          <tech.icon className="w-8 h-8 text-[#003366] transition-transform duration-300 group-hover:scale-110" />
                          <span className="font-medium">{tech.name}</span>
                        </CardContent>
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </section>

          <Button 
            onClick={() => setCurrentPage('work')}
            className="group text-lg transition-all duration-300 hover:translate-x-1 bg-[#003366] hover:bg-[#D3A6B1] text-white"
          >
            Explore My Work
            <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          {/* Contact Section */}
         <section className="mt-16">
         <h2 className="text-2xl font-bold mb-6 text-[#003366]">Let's Connect!</h2>
         <Card className="bg-white">
           <CardContent className="p-6">
             <form className="space-y-4">
               <Input placeholder="Your Name" className="border-[#003366] focus:ring-[#D3A6B1]" />
               <Input type="email" placeholder="Your Email" className="border-[#003366] focus:ring-[#D3A6B1]" />
               <Textarea placeholder="Your Message" className="border-[#003366] focus:ring-[#D3A6B1]" />
               <Button className="w-full bg-[#003366] hover:bg-[#D3A6B1] text-white">Send Message</Button>
             </form>
           </CardContent>
         </Card>
         <div className="mt-6 flex justify-center space-x-4">
           <Button variant="outline" className="gap-2 border-[#003366] text-[#003366] hover:bg-[#D3A6B1] hover:text-white">
             <Linkedin className="h-5 w-5" />
             LinkedIn
           </Button>
           <Button variant="outline" className="gap-2 border-[#003366] text-[#003366] hover:bg-[#D3A6B1] hover:text-white">
             <Github className="h-5 w-5" />
             GitHub
           </Button>
           <Button variant="outline" className="gap-2 border-[#003366] text-[#003366] hover:bg-[#D3A6B1] hover:text-white">
             <Mail className="h-5 w-5" />
             Email
           </Button>
         </div>
       </section>
       </div>

         
      ) : (
        // Work Page
        <div className="min-h-screen p-6 animate-fadeIn">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentPage('about')}
            className="mb-8 text-[#003366] hover:text-[#D3A6B1]"
          >
            ← Back to About
          </Button>          
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-[#003366]">
              Explore My Work
            </h2>

            <div className="grid gap-6">
              {projects.map((project) => (
                <Card 
                  key={project.title}
                  className="transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <CardHeader className="cursor-pointer" onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-[#003366]">{project.title}</CardTitle>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 text-[#003366] ${
                        expandedProject === project.title ? 'rotate-90' : ''
                      }`} />
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  {expandedProject === project.title && (
                    <CardContent className="animate-fadeIn bg-[#FFCE9E]">
                      <p>
                        {project.details}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Chatbot Section */}
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-6 text-[#003366]">Chat with Soniya's AI Assistant</h2>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="space-y-4 mb-4 h-[300px] overflow-y-auto">
                    {messages.map((message, index) => (
                      <div key={index} className={`p-4 rounded-lg ${message.role === 'user' ? 'bg-[#FFCE9E] ml-auto' : 'bg-[#F0F0F0]'} max-w-[80%]`}>
                        <p>{message.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask me anything..." 
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-[#003366] focus:ring-[#D3A6B1]"
                    />
                    <Button onClick={handleSendMessage} className="bg-[#003366] hover:bg-[#D3A6B1]">
                      <Send className="h-4 w-4" />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      )}    

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div> 
  )
}