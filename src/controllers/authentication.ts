import { catchErrors, InvalidTokenError } from "errors";
import { signToken } from "utils/authToken";
import { User } from "entities";

export const login = catchErrors(async (req, res) => {
  const { login } = req.body;
  const { password } = req.body;
  const user = await User.findOne({ login, password });
  if (!user) {
    throw new InvalidTokenError("Authentication error : User not found.");
  }
  res.respond({
    authToken: signToken({ sub: user.id })
  });
});
