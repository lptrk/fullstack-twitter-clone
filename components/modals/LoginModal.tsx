import useLoginModal from "@/hooks/useLoginModal";
import React, { useCallback, useState } from "react";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      {/* TODO ADD LOGIN */}
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div></div>;
};

export default LoginModal;
