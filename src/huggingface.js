import { prevUser } from "./context/UserContext";

export async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
		{
			headers: {
				Authorization: "Bearer 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",
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": prevUser.prompt}),
		}
	);
	const result = await response.blob();
	return result;
}
