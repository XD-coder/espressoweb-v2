'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Mail, User, MessageCircle, Send, CheckCircle2, XCircle } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (name && email && message) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
    }
    setIsLoading(false);
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" id="contact">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-light opacity-5 blur-3xl rounded-full"></div>
        <div className="absolute top-20 right-10 sm:right-20 w-24 sm:w-32 h-24 sm:h-32 bg-accent opacity-10 blur-xl rounded-full"></div>
        <div className="absolute bottom-20 left-10 sm:left-20 w-32 sm:w-48 h-32 sm:h-48 bg-primary opacity-10 blur-2xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-accent mx-auto rounded-full mb-4 md:mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-6">
            Have questions about our services? Need technical support? We'd love to hear from you!
          </p>
          
          {/* Instant Support Options */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 max-w-2xl mx-auto bg-card border border-border rounded-[var(--radius)] p-4 sm:p-6 shadow-[var(--shadow)]">
            <div className="flex items-center gap-3 text-foreground">
              <div className="bg-primary/10 p-2.5 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm sm:text-base">Email Support</p>
                <a href="mailto:support@espressohost.xyz" className="text-primary hover:text-primary-dark transition-colors text-xs sm:text-sm">
                  support@espressohost.xyz
                </a>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            
            <div className="flex items-center gap-3 text-foreground">
              <div className="bg-accent/10 p-2.5 rounded-full">
                <svg className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium text-sm sm:text-base">Discord Server</p>
                <a href="https://discord.gg/espressohosting" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark transition-colors text-xs sm:text-sm">
                  discord.gg/espressohosting
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] backdrop-blur-sm p-5 sm:p-8 md:p-10 relative overflow-hidden">
            {/* Form decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-primary to-accent rounded-t-[var(--radius-lg)]"></div>
            
            {/* Coffee bean icon decoration */}
            <div className="absolute -right-16 -bottom-16 opacity-[0.03] dark:opacity-[0.05]">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M2,21V19A4,4 0 0,1 6,15H18A4,4 0 0,1 22,19V21H2M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z" />
              </svg>
            </div>

            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6 relative z-10"
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <User className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-[var(--radius)] 
                      bg-background text-foreground 
                      border border-border 
                      focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
                      transition-all duration-200
                      placeholder:text-muted-foreground text-sm sm:text-base
                      disabled:opacity-60"
                    placeholder="Your name"
                    required
                    aria-required="true"
                    aria-invalid={status === 'error' && !name ? 'true' : 'false'}
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <Mail className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-[var(--radius)] 
                      bg-background text-foreground 
                      border border-border 
                      focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
                      transition-all duration-200
                      placeholder:text-muted-foreground text-sm sm:text-base
                      disabled:opacity-60"
                    placeholder="your.email@example.com"
                    required
                    aria-required="true"
                    aria-invalid={status === 'error' && !email ? 'true' : 'false'}
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="text-xs sm:text-sm font-medium text-muted-foreground mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <MessageCircle className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-[var(--radius)] 
                    bg-background text-foreground 
                    border border-border 
                    focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary 
                    transition-all duration-200
                    placeholder:text-muted-foreground resize-none text-sm sm:text-base
                    disabled:opacity-60"
                  placeholder="How can we help you?"
                  required
                  aria-required="true"
                  aria-invalid={status === 'error' && !message ? 'true' : 'false'}
                ></textarea>
              </motion.div>                <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-light 
                    text-primary-foreground font-medium 
                    py-2.5 sm:py-3 px-4 rounded-[var(--radius)] 
                    flex items-center justify-center gap-1.5 sm:gap-2 
                    transition-all duration-300
                    hover:shadow-[var(--shadow-md)] hover:shadow-primary/20 hover:scale-[1.02] 
                    active:scale-[0.98] 
                    disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none 
                    text-xs sm:text-sm md:text-base
                    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-background"
                  disabled={isLoading}
                  aria-label={isLoading ? "Sending message..." : "Send message"}
                  aria-busy={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                      <span className="ml-1.5 sm:ml-2">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="ml-1.5 sm:ml-2">Send Message</span>
                    </>
                  )}
                </button>
              </motion.div>
              
              {/* Status messages with animated transitions */}
              <div className="min-h-6 sm:min-h-8">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-500 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm mt-2 sm:mt-3"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-destructive flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm mt-2 sm:mt-3"
                    role="alert"
                    aria-live="assertive"
                  >
                    <XCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>Please fill out all fields.</span>
                  </motion.div>
                )}
              </div>
            </motion.form>
            
            {/* Instant support message */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Reach out through our Discord server for instant support:
              </p>
              <motion.a 
                href="https://discord.gg/espressohosting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-3 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-[var(--radius)] text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Join Our Discord
              </motion.a>
              <p className="mt-4 text-xs text-muted-foreground">
                Email support: <a href="mailto:support@espressohost.xyz" className="text-primary hover:underline">support@espressohost.xyz</a> (Response within 24 hours)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
