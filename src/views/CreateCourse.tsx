import React, { useState } from 'react';
import { 
  ArrowRight, 
  Upload, 
  Plus, 
  Trash2, 
  Video, 
  FileText, 
  DollarSign, 
  Info,
  CheckCircle2,
  Image as ImageIcon,
  PlayCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function CreateCourse({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    curriculum: [{ id: '1', title: '', lessons: [''] }]
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = () => {
    toast.success('تم إنشاء الدورة بنجاح وبانتظار المراجعة!');
    onBack();
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-medium mb-8"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            إلغاء والعودة
          </button>
          
          <div className="flex items-center justify-between relative">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-10"></div>
             {[1, 2, 3].map((s) => (
               <div key={s} className="flex flex-col items-center gap-2">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-4 border-slate-50 ${
                   step >= s ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-slate-200 text-slate-500'
                 }`}>
                   {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
                 </div>
                 <span className={`text-xs font-bold ${step >= s ? 'text-indigo-600' : 'text-slate-400'}`}>
                   {s === 1 ? 'المعلومات الأساسية' : s === 2 ? 'المنهج التعليمي' : 'السعر والنشر'}
                 </span>
               </div>
             ))}
          </div>
        </div>

        {/* Form Container */}
        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
        >
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900">المعلومات الأساسية</h2>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">عنوان الدورة</label>
                <input 
                  type="text" 
                  placeholder="مثال: احتراف تطوير الويب 2024"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">التصنيف</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-500">
                    <option>اختر تصنيفاً</option>
                    <option>برمجة</option>
                    <option>تصميم</option>
                    <option>تسويق</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">اللغة</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-500">
                    <option>العربية</option>
                    <option>الإنجليزية</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">وصف مختصر</label>
                <textarea 
                  rows={4}
                  placeholder="صف ما سيتعلمه الطالب في هذه الدورة..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">صورة الغلاف</label>
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer">
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    <ImageIcon className="w-8 h-8 text-slate-400" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-900">اضغط للرفع أو اسحب الصورة هنا</p>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG (حد أقصى 5MB)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">المنهج التعليمي</h2>
                <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm bg-indigo-50 px-4 py-2 rounded-xl hover:bg-indigo-100 transition-colors">
                  <Plus className="w-4 h-4" />
                  قسم جديد
                </button>
              </div>
              
              <div className="space-y-4">
                {[1, 2].map((s) => (
                  <div key={s} className="border border-slate-100 rounded-3xl p-6 bg-slate-50/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-slate-900 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold">0{s}</span>
                        <input 
                          type="text" 
                          placeholder="عنوان القسم..."
                          className="bg-transparent border-none font-bold text-slate-900 focus:ring-0 p-0 text-lg"
                          defaultValue={s === 1 ? 'مقدمة في المسار' : 'الأساسيات التطبيقية'}
                        />
                      </div>
                      <button className="text-red-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2].map((l) => (
                        <div key={l} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-5 h-5 text-indigo-500" />
                            <span className="text-sm font-medium">الدرس {l}: مقدمة تعريفية</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <button className="p-2 text-slate-400 hover:text-indigo-600"><Video className="w-4 h-4" /></button>
                             <button className="p-2 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        </div>
                      ))}
                      <button className="w-full border-2 border-dashed border-slate-200 py-3 rounded-2xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" /> إضافة درس جديد
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-black text-slate-900">السعر والنشر</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">السعر (USD)</label>
                    <div className="relative">
                      <DollarSign className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="number" 
                        placeholder="0.00"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">سعر الخصم (اختياري)</label>
                    <div className="relative">
                      <DollarSign className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="number" 
                        placeholder="0.00"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pr-11 pl-4 text-sm focus:ring-2 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-3xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 text-indigo-600" />
                    <h4 className="font-bold text-indigo-900">نصيحة التسعير</h4>
                  </div>
                  <p className="text-xs text-indigo-700 leading-relaxed">
                    الدورات التي تتراوح أسعارها بين $49 و $99 تميل إلى جذب عدد أكبر من الطلاب في البداية. يمكنك دائماً تغيير السعر لاحقاً.
                  </p>
                  <ul className="space-y-2 pt-2">
                    <li className="flex items-center gap-2 text-[10px] font-bold text-indigo-600">
                      <CheckCircle2 className="w-3 h-3" /> عمولة المنصة 10%
                    </li>
                    <li className="flex items-center gap-2 text-[10px] font-bold text-indigo-600">
                      <CheckCircle2 className="w-3 h-3" /> وصول لمدى الحياة للطلاب
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-2xl">
                  <div className="p-2 bg-amber-100 rounded-xl">
                    <FileText className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-amber-900">مراجعة الجودة</p>
                    <p className="text-xs text-amber-700">بمجرد الضغط على نشر، سيقوم فريقنا بمراجعة المحتوى للتأكد من مطابقته للمعايير. تستغرق المراجعة عادة 24-48 ساعة.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-8 py-3 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                السابق
              </button>
            ) : (
              <div />
            )}
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-slate-200"
              >
                المتابعة
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-100"
              >
                إرسال للمراجعة والنشر
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}