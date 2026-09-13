"use client";

import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { orderMessage } from "@/lib/whatsapp";

type OrderPanelProps = {
  productName: string;
  price: number;
  category: string;
  options: string[];
  optionLabel: string;
  variants: string[];
  variantLabel: string;
  features?: string[];
};

export function OrderPanel({
  productName,
  price,
  category,
  options,
  optionLabel,
  variants,
  variantLabel,
  features,
}: OrderPanelProps) {
  const [option, setOption] = useState(options[0] ?? "");
  const [variant, setVariant] = useState(variants[0] ?? "");

  return (
    <div className="space-y-6">
      {features && features.length > 0 ? (
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
            Keunggulan paket
          </p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-foreground"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
                  ✓
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          {optionLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {options.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setOption(item)}
              className={`min-w-11 rounded-full border px-3 py-2 text-sm transition-colors ${
                option === item
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-foreground hover:border-accent/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
          {variantLabel}
        </p>
        <div className="flex flex-wrap gap-2">
          {variants.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setVariant(item)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                variant === item
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-foreground hover:border-accent/40"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <WhatsAppButton
        message={orderMessage(productName, {
          option,
          variant,
          optionLabel,
          variantLabel,
          price,
          category,
        })}
        label="Pesan via WhatsApp"
        className="w-full rounded-full bg-[#25D366] sm:w-auto"
      />
    </div>
  );
}
