const fs = require('fs');
const path = require('path');
const dir = 'd:/Website/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const fp = path.join(dir, f);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Add dark variants for slate texts to fix contrast
  content = content.replace(/text-slate-900(?! dark:text-)/g, 'text-slate-900 dark:text-white');
  content = content.replace(/text-slate-800(?! dark:text-)/g, 'text-slate-800 dark:text-slate-100');
  content = content.replace(/text-slate-700(?! dark:text-)/g, 'text-slate-700 dark:text-slate-200');
  content = content.replace(/text-slate-600(?! dark:text-)/g, 'text-slate-600 dark:text-slate-300');
  content = content.replace(/text-slate-500(?! dark:text-)/g, 'text-slate-500 dark:text-slate-400');
  
  // Fix the brand name text-transparent gradients to have a dark mode fallback if they don't have one
  content = content.replace(/from-slate-900 via-slate-800 to-slate-500(?! dark:from-)/g, 'from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400');

  fs.writeFileSync(fp, content);
});
console.log('Fixed contrast globally');
