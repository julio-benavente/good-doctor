"use client";

import { Button, Typography } from "@/components";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const SharePage = () => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);
  const pathname = usePathname();

  return (
    <div className="mt-8">
      <Typography className="font-bold text-lg">Share this page</Typography>

      <Button
        className="w-full"
        color="secondary"
        onClick={() => copyToClipboard(window.location.toString())}

        // href="/"
      >
        Copy Link <ContentCopy className="ml-2 text-lg" />
      </Button>
    </div>
  );
};

export default SharePage;
