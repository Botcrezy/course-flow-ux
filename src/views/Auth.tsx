import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Globe, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Auth({ onLogin, onBack }: { onLogin: (user: any) => void; onBack: () => void }) {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'student' | 'instructor'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({
      id: '1',
      name: mode === 'login' ? (selectedRole === 'instructor' ? 'د. محمد علي' : 'أحمد محمد') : 'مستخدم جديد',
      email: 'test@example.com',
      role: selectedRole,
      avatar: selectedRole === 'instructor' 
        ? 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e93e9b5d-053b-4c5c-ba20-5c5a1e60984a/instructor-profile-b45e43a0-1774734516328.webp'
        : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="absolute top-8 left-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium">
          <ArrowRight className="w-4 h-4 rotate-180" />
          العودة للرئيسية
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-indigo-100 overflow-hidden border border-slate-100"
      >
        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              {mode === 'login' ? 'مرحباً بك مجدداً' : mode === 'signup' ? 'أنشئ حساباً جديداً' : 'استعادة كلمة المرور'}
            </h2>
            <p className="text-slate-500 text-sm">
              {mode === 'login' ? 'سجل دخولك لمتابعة رحلتك التعليمية' : 'انضم إلينا اليوم وابدأ التعلم'}
            </p>
          </div>

          {/* Role Selection (Only for demo/testing) */}
          <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl mb-8">
            <button 
              onClick={() => setSelectedRole('student')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedRole === 'student' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              أنا طالب
            </button>
            <button 
              onClick={() => setSelectedRole('instructor')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedRole === 'instructor' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              أنا محاضر
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {mode === 'signup' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-bold text-slate-700 pr-2">الاسم الكامل</label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      required
                      placeholder="أدخل اسمك الكامل"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 pr-2">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            {mode !== 'forgot' && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-bold text-slate-700 pr-2">كلمة المرور</label>
                  {mode === 'login' && (
                    <button 
                      type="button"
                      onClick={() => setMode('forgot')}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    required
                    placeholder="••••••••"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-11 pl-12 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl transition-all shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
            >
              {mode === 'login' ? 'تسجيل الدخول' : mode === 'signup' ? 'إنشاء الحساب' : 'إرسال تعليمات الاستعادة'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-sm text-slate-500"
            >
              {mode === 'login' ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}{' '}
              <span className="font-bold text-indigo-600 hover:underline">
                {mode === 'login' ? 'سجل الآن مجاناً' : 'سجل دخولك'}
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}