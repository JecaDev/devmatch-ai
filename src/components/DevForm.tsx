'use client';

import { useState } from 'react';

export default function DevForm() {
  const [formData, setFormData] = useState({
    name: '',
    stack: '',
    level: 'junior',
    techs: [] as string[],
    goal: '',
  });

  const techOptions = ['React', 'Node', 'Python', 'TypeScript', 'Next.js', 'MongoDB'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        techs: checked
          ? [...prev.techs, value]
          : prev.techs.filter((tech) => tech !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('🧠 Dados enviados:', formData);
    // Aqui faremos o envio para a IA futuramente
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-zinc-900 rounded-xl shadow-lg max-w-xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-white">Seu Perfil Técnico</h2>

      <div>
        <label className="block text-white">Nome</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 rounded bg-zinc-800 text-white"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-white">Stack Principal</label>
        <input
          type="text"
          name="stack"
          className="w-full p-2 rounded bg-zinc-800 text-white"
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-white">Nível</label>
        <select
          name="level"
          className="w-full p-2 rounded bg-zinc-800 text-white"
          onChange={handleChange}
        >
          <option value="junior">Júnior</option>
          <option value="pleno">Pleno</option>
          <option value="senior">Sênior</option>
        </select>
      </div>

      <div>
        <label className="block text-white mb-2">Tecnologias que você domina</label>
        <div className="flex flex-wrap gap-2">
          {techOptions.map((tech) => (
            <label key={tech} className="text-white flex items-center gap-1">
              <input type="checkbox" name="techs" value={tech} onChange={handleChange} />
              {tech}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-white">Objetivo profissional</label>
        <textarea
          name="goal"
          className="w-full p-2 rounded bg-zinc-800 text-white"
          rows={3}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
      >
        Gerar Match com IA
      </button>
    </form>
  );
}
