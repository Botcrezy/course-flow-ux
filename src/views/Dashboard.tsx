import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Bell, 
  CheckCircle2,
  Clock,
  User as UserIcon,
  Plus,
  LayoutDashboard as DashboardIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { User } from '../types';

interface DashboardProps {
  user: User;
  onNavigate: (view: any) => void;
}

const STATS = [
  { label: 'إجمالي الطلاب', value: '1,284', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'الدورات النشطة', value: '12', change: '+2', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'أرباح الشهر', value: '$8,420', change: '+18.5%', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'متوسط التقييم', value: '4.9', change: '+0.1', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const RECENT_BOOKINGS = [
  { id: '1', student: 'محمد القحطاني', course: 'تطوير الويب الشامل', date: 'منذ ساعتين', amount: '$499', status: 'confirmed' },
  { id: '2', student: 'لينا سالم', course: 'أساسيات التصميم', date: 'منذ 5 ساعات', amount: '$350', status: 'pending' },
  { id: '3', student: 'عمر ياسر', course: 'التسويق الرقمي', date: 'أمس', amount: '$299', status: 'confirmed' },
];

export function Dashboard({ user, onNavigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      <aside className="w-64 bg-white border-l border-slate-200 hidden lg:flex flex-col">
        <div className="p-6 flex-1 space-y-2">
          {[
            { id: 'overview', label: 'نظرة عامة', icon: DashboardIcon },
            { id: 'courses', label: 'دوراتي', icon: BookOpen },
            { id: 'students', label: 'الطلاب', icon: Users },
            { id: 'sales', label: 'المبيعات', icon: DollarSign },
            { id: 'settings', label: 'الإعدادات', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="p-6 border-t border-slate-100">
          <div className="bg-indigo-50 rounded-2xl p-4">
            <p className="text-xs font-bold text-indigo-700 mb-1">تحتاج مساعدة؟</p>
            <p className="text-[10px] text-indigo-600/70 mb-3">تواصل مع الدعم الفني الخاص بالمدربين</p>
            <button className="w-full bg-white text-indigo-600 py-2 rounded-lg text-xs font-bold shadow-sm">
              مركز المساعدة
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-slate-50/50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900">أهلاً بك، {user.name} 👋</h1>
              <p className="text-slate-500">هذا ما يحدث في أكاديميتك اليوم.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 bg-white rounded-xl border border-slate-200 text-slate-500 hover:text-indigo-600 transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              {user.role === 'instructor' && (
                <button 
                  onClick={() => onNavigate('create-course')}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-100 transition-all"
                >
                  <Plus className="w-5 h-5" />
                  دورة جديدة
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-black text-slate-900 mt-1">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="font-black text-slate-900">آخر الحجوزات</h3>
                  <button className="text-xs font-bold text-indigo-600 hover:underline">عرض الكل</button>
                </div>
                <div className="divide-y divide-slate-50">
                  {RECENT_BOOKINGS.map((booking) => (
                    <div key={booking.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                          <UserIcon className="w-6 h-6 text-slate-400" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{booking.student}</p>
                          <p className="text-xs text-slate-500">{booking.course}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className="font-black text-slate-900">{booking.amount}</p>
                        <div className="flex items-center gap-1 mt-1">
                          {booking.status === 'confirmed' ? (
                            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                              <CheckCircle2 className="w-3 h-3" /> تم التأكيد
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                              <Clock className="w-3 h-3" /> قيد المراجعة
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-indigo-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 overflow-hidden">
                    <img src={user.avatar} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">{user.name}</h4>
                    <p className="text-xs text-indigo-100 capitalize">{user.role}</p>
                  </div>
                </div>
                <button className="w-full mt-6 bg-white text-indigo-600 py-3 rounded-2xl font-bold text-sm shadow-sm hover:bg-slate-50 transition-colors">
                  تعديل الملف الشخصي
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}