type BankInfoProps = {
  title?: string;
  compact?: boolean;
  className?: string;
};

const BankInfo = ({ title = "Payment Information", compact = false, className = "" }: BankInfoProps) => {
  return (
    <div className={`bg-accent/10 rounded-xl border border-accent/20 ${compact ? "p-5" : "p-8"} ${className}`}>
      <div className="mb-4">
        <h3 className={`${compact ? "text-xl" : "text-2xl"} font-bold`}>{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">Use these sample bank details for reference when paying via your banking app.</p>
      </div>
      <div className={`bg-card rounded-lg ${compact ? "p-4" : "p-6"} space-y-3`}>
        <div>
          <p className="text-sm text-muted-foreground">Bank Name</p>
          <p className="font-bold">State Bank of India</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Account Name</p>
          <p className="font-bold">SRI LAKSHMI SRINIVAASA GARLIC & CO.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-muted-foreground">Account Number (Sample)</p>
            <p className="font-bold tracking-wide">1234567890123</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">IFSC Code (Sample)</p>
            <p className="font-bold tracking-wide">SBIN0001234</p>
          </div>
        </div>
        <div className="pt-3 border-t">
          <p className="text-xs text-muted-foreground">
            Note: These are sample bank details provided for easy reference. Please confirm the exact payment details with us via phone or WhatsApp before transferring funds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
