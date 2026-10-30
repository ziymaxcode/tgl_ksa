import React from "react";
import { CheckCircle2, ShieldCheck, QrCode } from "lucide-react";

export const ZatcaInvoiceVisual: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden text-slate-800 ${className}`}>
      {/* Top OS Window Header */}
      <div className="bg-slate-900 px-4 sm:px-5 py-3 flex flex-wrap items-center justify-between gap-2 text-white border-b border-slate-800">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="ms-2 text-[11px] sm:text-xs font-mono text-slate-300 truncate">
            TGL ERP · ZATCA Phase 2 FATOORA
          </span>
        </div>
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3 h-3" />
            Clearance Approved
          </span>
        </div>
      </div>

      {/* Invoice Document Body */}
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 bg-gradient-to-b from-white to-slate-50/50">
        {/* Invoice Header Details */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-0.5">
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600">
              Tax Invoice · فاتورة ضريبية
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              INV-2026-08942
            </div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-mono break-all sm:break-normal">
              UUID: 9c2b4e71-4a18-4e89-980e-3fa801b7a6e1
            </div>
          </div>

          {/* QR Code Container */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200 shrink-0 self-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white p-1 rounded-lg border border-slate-300 flex items-center justify-center shadow-2xs shrink-0">
              <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-slate-900" />
            </div>
            <div className="text-[10px] text-slate-500 font-mono leading-tight">
              <span className="text-emerald-700 font-semibold block">TLVs Encrypted</span>
              <span>ZATCA Phase 2</span>
              <span className="block text-slate-400">15% VAT Included</span>
            </div>
          </div>
        </div>

        {/* Client & Vendor Grid - Responsive: Stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-slate-400 font-medium text-[10px] uppercase mb-1">Seller / المورّد</div>
            <div className="font-semibold text-slate-900">Al Rayan Trading Co. W.L.L.</div>
            <div className="text-slate-500 text-[11px] mt-0.5">CR: 1010892341 · Riyadh, KSA</div>
            <div className="text-slate-500 font-mono text-[11px]">VAT: 310928374800003</div>
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
            <div className="text-slate-400 font-medium text-[10px] uppercase mb-1">Buyer / العميل</div>
            <div className="font-semibold text-slate-900">Modern Contracting Est.</div>
            <div className="text-slate-500 text-[11px] mt-0.5">CR: 2050981245 · Dammam, KSA</div>
            <div className="text-slate-500 font-mono text-[11px]">VAT: 300192847500003</div>
          </div>
        </div>

        {/* Line Items: Desktop Table View (>= sm) */}
        <div className="hidden sm:block rounded-xl border border-slate-200 overflow-hidden text-xs">
          <div className="grid grid-cols-12 bg-slate-100/80 px-3 py-2 font-semibold text-slate-700 border-b border-slate-200">
            <div className="col-span-6">Item & Description</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-2 text-end">Rate (SAR)</div>
            <div className="col-span-2 text-end">Total (SAR)</div>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="grid grid-cols-12 px-3 py-2 text-slate-700">
              <div className="col-span-6 font-medium">Enterprise Cloud ERP License (12 Mos)</div>
              <div className="col-span-2 text-center">1</div>
              <div className="col-span-2 text-end font-mono">14,500.00</div>
              <div className="col-span-2 text-end font-mono font-semibold">14,500.00</div>
            </div>
            <div className="grid grid-cols-12 px-3 py-2 text-slate-700 bg-slate-50/40">
              <div className="col-span-6 font-medium">ZATCA Phase 2 API Onboarding & CSID</div>
              <div className="col-span-2 text-center">1</div>
              <div className="col-span-2 text-end font-mono">2,500.00</div>
              <div className="col-span-2 text-end font-mono font-semibold">2,500.00</div>
            </div>
          </div>
        </div>

        {/* Line Items: Mobile Card View (< sm) */}
        <div className="sm:hidden space-y-2 text-xs">
          <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <div className="font-semibold text-slate-900 leading-snug">
              Enterprise Cloud ERP License (12 Mos)
            </div>
            <div className="flex items-center justify-between text-slate-600 font-mono text-[11px]">
              <span>Qty: 1 × 14,500.00 SAR</span>
              <span className="font-bold text-slate-900">14,500.00 SAR</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-slate-200 bg-white space-y-1.5">
            <div className="font-semibold text-slate-900 leading-snug">
              ZATCA Phase 2 API Onboarding & CSID
            </div>
            <div className="flex items-center justify-between text-slate-600 font-mono text-[11px]">
              <span>Qty: 1 × 2,500.00 SAR</span>
              <span className="font-bold text-slate-900">2,500.00 SAR</span>
            </div>
          </div>
        </div>

        {/* Totals Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Cryptographic hash validated with ZATCA gateway</span>
          </div>

          <div className="text-start sm:text-end space-y-0.5 text-xs bg-slate-50 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-slate-200/70">
            <div className="flex sm:justify-end justify-between gap-4 text-slate-500">
              <span>Subtotal:</span>
              <span className="font-mono text-slate-800">17,000.00 SAR</span>
            </div>
            <div className="flex sm:justify-end justify-between gap-4 text-slate-500">
              <span>VAT (15%):</span>
              <span className="font-mono text-slate-800">2,550.00 SAR</span>
            </div>
            <div className="flex sm:justify-end justify-between gap-4 text-sm font-bold text-slate-900 border-t border-slate-200 sm:border-slate-300 pt-1 mt-1">
              <span>Grand Total:</span>
              <span className="font-mono text-blue-700">19,550.00 SAR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
