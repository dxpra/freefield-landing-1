import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Play,
  Image,
  Video,
  Music,
  Sparkles,
  Cpu,
  Cloud,
  Monitor,
  Zap,
  ArrowRight,
  Star,
  GitFork,
  Users,
  ChevronDown,
  ExternalLink,
  Layers,
  Shield,
  Terminal,
  Box,
  Wand2,
  Camera,
  Palette,
  Film,
  Volume2,
  Server,
  Check,
  Menu,
  X,
} from 'lucide-react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Freefield</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#apps" className="text-sm text-gray-300 hover:text-white transition-colors">Apps</a>
            <a href="#architecture" className="text-sm text-gray-300 hover:text-white transition-colors">Architecture</a>
            <a href="#run" className="text-sm text-gray-300 hover:text-white transition-colors">Run It</a>
            <a
              href="https://github.com/neuregex/freefield"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#apps" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Apps</a>
              <a href="#architecture" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Architecture</a>
              <a href="#run" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>Run It</a>
              <a
                href="https://github.com/neuregex/freefield"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-8">
            <Star className="w-3.5 h-3.5" />
            <span>1.6k stars on GitHub</span>
            <span className="text-violet-500">•</span>
            <span>MIT License</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            Freefield
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Open-source Higgsfield on ComfyUI.{' '}
          <span className="text-white font-medium">120 image, video, VFX and audio apps</span>,
          every model open weights. Runs on Modal or your own GPU.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/neuregex/freefield"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold text-lg shadow-lg shadow-violet-500/25 transition-all duration-200 hover:shadow-violet-500/40 hover:scale-[1.02]"
          >
            <Github className="w-5 h-5" />
            View on GitHub
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://youtu.be/N7mv2v3Txeo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-gray-500"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">120</div>
            <div className="text-sm">Apps</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm">Open Weights</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24 GB</div>
            <div className="text-sm">Min. VRAM</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl font-bold text-white">48</div>
            <div className="text-sm">Lab Runs</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16"
        >
          <a href="#features" className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors">
            <span className="text-sm">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: '120 Apps',
      description: 'Image, video, VFX and audio apps. Every one a ComfyUI workflow with an app.json manifest. No per-app code.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Open Weights Only',
      description: 'No API or partner nodes. Every model is a file you download with its Hugging Face repo, size and license.',
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Your GPU',
      description: 'Run on Modal (scales to zero), on RunPod or Vast.ai by the hour, or on your own NVIDIA card with 24 GB.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: 'One Folder Per App',
      description: 'Add an app from any ComfyUI workflow. tools/import_workflow.py drafts the manifest from your exported workflow.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lab-Tested',
      description: '48 lab runs on Modal (L40S and H100), 710 of 733 cases ok. Every example in the UI comes from a real GPU run.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: 'VRAM Map',
      description: 'Every app shows its peak VRAM measured on a GPU. Between apps, the gateway frees VRAM so nothing lingers.',
      color: 'from-rose-500 to-red-500',
    },
  ];

  return (
    <section id="features" className="relative py-32 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Everything Higgsfield does,{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              open source
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Freefield rebuilds Higgsfield's creative apps on top of ComfyUI and the Comfy SDK.
            Each app is a folder with a manifest and a workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppCategories() {
  const categories = [
    {
      icon: <Image className="w-8 h-8" />,
      title: 'Image',
      count: '40+ apps',
      color: 'from-violet-500 to-purple-600',
      apps: [
        { name: 'Create Image', model: 'FLUX 3 Klein', desc: '10 aspect ratios, 17 photographic looks' },
        { name: 'Cinema Studio', model: 'FLUX 3 Klein', desc: 'Genre, era, camera body, lens, lighting' },
        { name: 'Styles', model: 'Krea 2 Turbo', desc: '9 official style LoRAs' },
        { name: 'Edit', model: 'FLUX 3 Klein', desc: 'Describe the change in words' },
        { name: 'Inpaint', model: 'FLUX 3 Klein', desc: 'Paint the area to redraw' },
        { name: 'Relight', model: 'Qwen Edit 2509', desc: 'Light presets or custom direction' },
      ],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video',
      count: '46 apps',
      color: 'from-fuchsia-500 to-pink-600',
      apps: [
        { name: 'Cinema Video', model: 'LTX-2.5', desc: '33 camera moves, tempo and duration' },
        { name: 'H3 Video', model: 'MiniMax H3', desc: 'Text or photo to clip with speech' },
        { name: 'Effects', model: 'Wan 2.1 14B', desc: '24 effect LoRAs (Cakeify, Hydraulic press…)' },
        { name: 'Morph', model: 'LTX-2.5', desc: '15 transformations (astronaut, robot…)' },
        { name: 'Camera Moves', model: 'Wan 2.2 Fun', desc: 'Pans, zooms and rolls on an image' },
        { name: 'VFX', model: 'LTX-2.5', desc: 'Clean plate, day-to-night, water' },
      ],
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: 'VFX & Motion',
      count: '20+ apps',
      color: 'from-blue-500 to-indigo-600',
      apps: [
        { name: 'Mixed Media', model: 'LTX-2.5', desc: '16 looks + Union Control IC-LoRA' },
        { name: 'Genjutsu', model: 'LTX-2.5', desc: 'Reference sheet composed into a clip' },
        { name: 'Motion Transfer', model: 'Wan Animate 2', desc: 'Copy motion from one clip to another' },
        { name: 'Reshoot', model: 'MiniMax H3', desc: 'A clip seen from a new angle' },
        { name: 'Reframe', model: 'LTX-2.5', desc: 'New aspect ratio, missing parts painted in' },
        { name: 'Transitions', model: 'LTX-2.5', desc: 'Transition LoRA between scenes' },
      ],
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Audio',
      count: '2 apps',
      color: 'from-emerald-500 to-teal-600',
      apps: [
        { name: 'Music', model: 'MiniMax Music 3', desc: 'Generate soundtracks from text prompts' },
        { name: 'SFX', model: 'Stable Audio 3', desc: 'Sound effects generation' },
        { name: 'Dub', model: 'LTX-2.5', desc: 'New words with lip sync and voice reference' },
        { name: 'Speak', model: 'LTX-2.5', desc: 'Voicing a quoted line in one pass' },
        { name: 'Talking', model: 'LTX-2.5', desc: 'Audio-to-video with lip sync' },
        { name: 'Extend Video', model: 'MiniMax H3', desc: 'Continue from the last frame with sound' },
      ],
    },
  ];

  return (
    <section id="apps" className="relative py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            120 apps across{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              four studios
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Every example in the app is a real GPU run made by the lab, with its time and peak VRAM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${cat.color} bg-opacity-10`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                    <p className="text-white/70">{cat.count}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.apps.map((app, j) => (
                  <div key={j} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-white/10 transition-colors">
                    <div className="font-medium text-white text-sm">{app.name}</div>
                    <div className="text-xs text-violet-400 mt-0.5">{app.model}</div>
                    <div className="text-xs text-gray-500 mt-1">{app.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="relative py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            How it{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            No per-app code. The web UI, the runner, model downloads, the VRAM map and the tests
            are all derived from app.json manifests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Architecture diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
            {/* Browser */}
            <div className="flex-1 max-w-xs w-full">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-center">
                <div className="inline-flex p-3 rounded-xl bg-violet-500/20 mb-3">
                  <Monitor className="w-6 h-6 text-violet-400" />
                </div>
                <div className="font-semibold text-white">Browser</div>
                <div className="text-sm text-gray-400 mt-1">web/ + server/</div>
                <div className="text-xs text-gray-500 mt-1">Menu and forms drawn from apps/*/app.json</div>
              </div>
            </div>

            <div className="text-violet-500 rotate-90 lg:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Gateway */}
            <div className="flex-1 max-w-xs w-full">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 border border-fuchsia-500/20 text-center">
                <div className="inline-flex p-3 rounded-xl bg-fuchsia-500/20 mb-3">
                  <Shield className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div className="font-semibold text-white">Gateway :8000</div>
                <div className="text-sm text-gray-400 mt-1">Token check, GPU unload</div>
                <div className="text-xs text-gray-500 mt-1">Unloads the GPU when the app changes</div>
              </div>
            </div>

            <div className="text-fuchsia-500 rotate-90 lg:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* Proxy */}
            <div className="flex-1 max-w-xs w-full">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-center">
                <div className="inline-flex p-3 rounded-xl bg-blue-500/20 mb-3">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <div className="font-semibold text-white">comfy-api-proxy</div>
                <div className="text-sm text-gray-400 mt-1">Comfy API v2</div>
                <div className="text-xs text-gray-500 mt-1">In front of ComfyUI</div>
              </div>
            </div>

            <div className="text-blue-500 rotate-90 lg:rotate-0">
              <ArrowRight className="w-6 h-6" />
            </div>

            {/* ComfyUI */}
            <div className="flex-1 max-w-xs w-full">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 text-center">
                <div className="inline-flex p-3 rounded-xl bg-emerald-500/20 mb-3">
                  <Cpu className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="font-semibold text-white">ComfyUI :8188</div>
                <div className="text-sm text-gray-400 mt-1">Your GPU</div>
                <div className="text-xs text-gray-500 mt-1">Modal or local</div>
              </div>
            </div>
          </div>

          {/* Code example */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-2xl bg-gray-900 border border-white/[0.05] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-gray-500">apps/create-image/app.json</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`{
  "id": "create-image",
  "name": "Create Image",
  "studio": "image",
  "inputs": [
    { "id": "prompt", "type": "text", "label": "Prompt" },
    { "id": "aspect", "type": "select", "options": [...] },
    { "id": "upsampler", "type": "toggle", "default": true }
  ],
  "models": [
    { "file": "flux3-klein-int8.safetensors",
      "repo": "black-forest-labs/flux-3-image-klein-comfy",
      "size_gb": 5.83, "license": "FLUX-Kommunity" }
  ],
  "outputs": [{ "id": "image", "type": "image" }]
}`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RunOptions() {
  const options = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'RunPod or Vast.ai',
      subtitle: 'One-click deploy',
      description: 'No install and no Modal account. Rent a GPU with Freefield\'s public template: it starts the backend and the studio, downloads the models and prints a link to open.',
      features: ['24 GB or more GPU', '60 GB storage', '5-10 min first start', 'Public template'],
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Modal',
      subtitle: 'Scales to zero',
      description: 'A GPU that scales to zero between runs, so you pay per second of work. Node 22.6+, Python 3.10+ and a Modal account.',
      features: ['Pay per second', 'Auto-scaling', 'Volume for models', 'Hosted demo option'],
      color: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Your Own GPU',
      subtitle: 'No hourly bill',
      description: 'An NVIDIA card with 24 GB for most apps. tools/local_backend.py runs the same backend on your machine with ComfyUI at the pinned commit.',
      features: ['NVIDIA 24 GB+', 'No cloud needed', 'Full control', 'Docker option'],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="run" className="relative py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Run it{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              anywhere
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Three ways, the same 120 apps. Choose what fits your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${opt.color} shadow-lg mb-4`}>
                <div className="text-white">{opt.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-white">{opt.title}</h3>
              <p className="text-sm text-violet-400 font-medium">{opt.subtitle}</p>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">{opt.description}</p>
              <ul className="mt-4 space-y-2">
                {opt.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Quick start code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl bg-gray-900 border border-white/[0.05] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-gray-500">Quick start (Modal)</span>
            </div>
            <div className="p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-300">
{`# Check what is missing
python tools/doctor.py

# Set up secrets
python tools/setup_token.py
modal secret create huggingface HF_TOKEN=hf_...

# Download models and deploy
python tools/catalog.py packs
modal run infra/modal_app.py::download --pack image
modal deploy infra/modal_app.py

# Start the studio
npm install && npm run serve`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Models() {
  const models = [
    { name: 'FLUX 3 Image Klein', type: 'Image', license: 'FLUX Kommunity', size: '5.83 GB' },
    { name: 'LTX-2.5 22B', type: 'Video', license: 'LTX-2.x Community', size: '22 GB' },
    { name: 'MiniMax H3', type: 'Video', license: 'MiniMax H3 Community', size: '27.1 GB' },
    { name: 'Krea 2 Turbo', type: 'Image', license: 'Krea 2 Community', size: '~6 GB' },
    { name: 'Wan 2.1 14B', type: 'Video', license: 'Apache-2.0', size: '14 GB' },
    { name: 'MiniMax Music 3', type: 'Audio', license: 'MiniMax-Music3 Community', size: '14.3 GB' },
    { name: 'SeedVR2 3B', type: 'Upscale', license: 'Apache-2.0', size: '3 GB' },
    { name: 'SCAIL-2', type: 'Character', license: 'Apache-2.0', size: '~8 GB' },
  ];

  return (
    <section className="relative py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Open{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              models
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            No API or partner nodes. Every model is a file you download, listed with its repo, size and license.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="pb-4 text-sm font-medium text-gray-400">Model</th>
                <th className="pb-4 text-sm font-medium text-gray-400">Type</th>
                <th className="pb-4 text-sm font-medium text-gray-400">License</th>
                <th className="pb-4 text-sm font-medium text-gray-400">Size</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, i) => (
                <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 text-white font-medium">{model.name}</td>
                  <td className="py-4">
                    <span className="inline-flex px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-300 text-xs font-medium">
                      {model.type}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400 text-sm">{model.license}</td>
                  <td className="py-4 text-gray-400 text-sm font-mono">{model.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="relative py-32 bg-gray-950">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Join the{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              community
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Freefield is MIT-licensed and growing. Star the repo, fork it, or add your own apps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <Star className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">1.6k</div>
              <div className="text-sm text-gray-400">Stars</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <GitFork className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">302</div>
              <div className="text-sm text-gray-400">Forks</div>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">4</div>
              <div className="text-sm text-gray-400">Contributors</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/neuregex/freefield"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://youtu.be/N7mv2v3Txeo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-lg transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5" />
              Demo Video
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 bg-gray-950 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">Freefield</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="https://github.com/neuregex/freefield" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://github.com/neuregex/freefield/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Docs
            </a>
            <a href="https://github.com/neuregex/freefield/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              MIT License
            </a>
            <a href="https://youtu.be/N7mv2v3Txeo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Demo
            </a>
          </div>

          <div className="text-sm text-gray-500">
            Open-source Higgsfield on ComfyUI
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white antialiased">
      <Navbar />
      <Hero />
      <Features />
      <AppCategories />
      <Architecture />
      <RunOptions />
      <Models />
      <Community />
      <Footer />
    </div>
  );
}
