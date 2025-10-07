import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Copy, Check, MessageCircle } from "lucide-react";

type ContactPromptProps = {
  context?: string;
  productName?: string;
  category?: string;
  triggerVariant?: "default" | "onPrimary";
  triggerSize?: "sm" | "lg";
  className?: string;
};

const SHOP_TEL = "+914443165353"; // Landline (no WhatsApp)
const CELL1 = "+919789535353";
const CELL2 = "+919360335353";

function buildWhatsappUrl(phone: string, text: string) {
  return `https://wa.me/${phone.replace("+", "").trim()}?text=${encodeURIComponent(text)}`;
}

export default function ContactPrompt({
  context,
  productName,
  category,
  triggerVariant = "default",
  triggerSize = "lg",
  className = "",
}: ContactPromptProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const message = useMemo(() => {
    const source = context ? ` (from ${context})` : "";
    const subject = productName || category || "your wholesale spices";
    return `Hello, I'm interested in ${subject}.${source}\nQuantity: ___\nDelivery location: ___\nPreferred date: ___`;
  }, [context, productName, category]);

  const TriggerButtons = (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${className}`}>
      <DialogTrigger asChild>
        <Button size={triggerSize} className={triggerVariant === "onPrimary" ? "bg-card text-foreground hover:bg-card/90" : ""}>
          <Phone className="h-5 w-5 mr-2" /> Call / WhatsApp
        </Button>
      </DialogTrigger>
    </div>
  );

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      // ignore
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {TriggerButtons}
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Options</DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Choose a number to call</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a href={`tel:${SHOP_TEL}`} className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
                Shop
              </a>
              <a href={`tel:${CELL1}`} className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
                Cell 1
              </a>
              <a href={`tel:${CELL2}`} className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors">
                Cell 2
              </a>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Prefilled WhatsApp message</div>
            <div className="bg-muted/50 border border-border rounded-md p-3 text-sm whitespace-pre-wrap">
              {message}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => copy(message, "msg")}>
                {copied === "msg" ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />} Copy
              </Button>
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground mb-2">Send via WhatsApp</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={buildWhatsappUrl(CELL1, message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Cell 1
              </a>
              <a
                href={buildWhatsappUrl(CELL2, message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp Cell 2
              </a>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            Tip: Share your required quantity, delivery location, and preferred date to get a faster quote.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
