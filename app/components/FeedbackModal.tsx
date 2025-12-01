import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface FeedBackModalProps {
  modal: {
    type: "success" | "error" | null;
    message?: string;
  };
  setModal: React.Dispatch<
    React.SetStateAction<{
      type: "success" | "error" | null;
      message?: string;
    }>
  >;
  pageUsedFor: string;
}


export default function FeedbackModal({ modal, setModal, pageUsedFor }: FeedBackModalProps) {

  const router = useRouter();

  return (
    <AnimatePresence>
      {modal.type && (
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-sm w-full text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {modal.type === "success" ? (
              <>
                <CheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {pageUsedFor} Successful
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                  Your {pageUsedFor === "Subscription" ? "email" : pageUsedFor === "Send Message" ? "message" : "booking"} has been {pageUsedFor === "Subscription" ? "subscribed" : pageUsedFor === "Send Message" ? "sent" : "done"} successfully.
                </p>
                <button
                  onClick={() => { setModal({ type: null }) ; router.push('/'); }}
                  className="px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition"
                >
                  Back to Home
                </button>
              </>
            ) : (
              <>
                <XCircle className="mx-auto text-red-500 text-5xl mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {pageUsedFor} Failed
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">{modal.message}</p>
                <button
                  onClick={() => setModal({ type: null })}
                  className="px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition"
                >
                  Try Again
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}