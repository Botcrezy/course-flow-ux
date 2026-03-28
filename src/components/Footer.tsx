import React from 'react';
import { BookOpen, Globe, Mail, Phone, Share2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">أكاديميتي</span>
          </div>
          <p className="text-slate-500 leading-relaxed">
            المنصة الرائدة في العالم العربي لتعلم مهارات المستقبل. نؤمن أن التعليم هو المفتاح الوحيد للتغيير والنجاح.
          </p>
          <div className="flex items-center gap-4">
            <Globe className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer" />
            <Share2 className="w-5 h-5 text-slate-400 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">روابط سريعة</h4>
          <ul className="space-y-4">
            {['جميع الكورسات', 'المسارات التعليمية', 'من نحن', 'الأسئلة الشائعة', 'اتصل بنا'].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">التصنيفات الشائعة</h4>
          <ul className="space-y-4">
            {['تطوير الويب', 'الذكاء الاصطناعي', 'التسويق الرقمي', 'التصميم الجرافيكي', 'إدارة المشاريع'].map((link) => (
              <li key={link}>
                <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">تواصل معنا</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-500">
              <Mail className="w-4 h-4 text-indigo-600" />
              <span className="text-sm">info@myacademy.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <Phone className="w-4 h-4 text-indigo-600" />
              <span className="text-sm">+966 500 000 000</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}