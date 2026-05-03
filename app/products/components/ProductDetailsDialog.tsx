'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/config';

interface ProductDetailsDialogProps {
  product: Product;
  isActive: boolean;
  ui: {
    moreDetails: string;
    specifications: string;
    applications: string;
    [key: string]: unknown; // Allow for extra properties from JSON
  };
}

export function ProductDetailsDialog({ product, isActive, ui }: ProductDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            'group/btn flex w-full items-center justify-between rounded-2xl border p-2 pl-6 transition-all duration-300',
            isActive
              ? 'bg-kodai-green border-kodai-green text-white shadow-lg'
              : 'border-kodai-green/10 bg-kodai-green/5 hover:bg-kodai-green hover:border-kodai-green',
          )}
        >
          <span
            className={cn(
              'text-sm font-bold uppercase tracking-widest transition-colors',
              isActive ? 'text-white' : 'text-kodai-dark group-hover/btn:text-white',
            )}
          >
            {ui.moreDetails}
          </span>
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-500 group-hover/btn:rotate-[360deg]',
              isActive
                ? 'bg-white/20 text-white'
                : 'bg-white text-kodai-green group-hover/btn:bg-white/15 group-hover/btn:text-white',
            )}
          >
            <ArrowRight
              size={22}
              className="transition-transform group-hover/btn:translate-x-0.5"
            />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] rounded-3xl p-6 md:p-8 bg-white z-[60] border border-black/10 shadow-[0_24px_80px_rgba(26,31,46,0.14)] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl font-semibold text-kodai-dark mb-4">
            {product.name} Details
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="font-bold text-kodai-dark mb-3">Product Overview</h4>
            <p className="text-sm leading-8 text-gray-600 font-medium">{product.description}</p>
          </div>
          <div>
            <h4 className="font-bold text-kodai-dark mb-3">{ui.specifications}</h4>
            <div className="grid gap-0 border-t border-black/5">
              {product.specifications?.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2.5 border-b border-black/5 last:border-0"
                >
                  <span className="font-semibold text-gray-700 text-sm whitespace-nowrap">
                    {spec.label}
                  </span>
                  <span className="text-gray-600 text-sm font-medium text-left sm:text-right sm:max-w-[60%]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {product.applications && product.applications.length > 0 && (
            <div>
              <h4 className="font-bold text-kodai-dark mb-3">{ui.applications}</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 font-medium">
                {product.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
