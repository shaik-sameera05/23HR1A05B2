async function Log(stack, level, packageName, message) {
  const payload = {
    stack,
    level,
    package: packageName,
    message,
  };

  try {
    const response = await fetch("http://4.224.186.213/evaluation-service/logs", {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzc2hhaWs4MDY3NkBnbWFpbC5jb20iLCJleHAiOjE3ODI1NDAwMDIsImlhdCI6MTc4MjUzOTEwMiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjE3Y2MyNDUwLTg2ZmEtNDZmNy1hMGU0LTM5ZDBhMTFiODBiZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InMgc2FtZWVyYSIsInN1YiI6IjQ5NTRjYzM5LTU0MGQtNDA0Ny1hOWU0LTM5ZTZmNDY2Y2RlNiJ9LCJlbWFpbCI6InNzaGFpazgwNjc2QGdtYWlsLmNvbSIsIm5hbWUiOiJzIHNhbWVlcmEiLCJyb2xsTm8iOiIyM2hyMWEwNWIyIiwiYWNjZXNzQ29kZSI6ImFUa3licyIsImNsaWVudElEIjoiNDk1NGNjMzktNTQwZC00MDQ3LWE5ZTQtMzllNmY0NjZjZGU2IiwiY2xpZW50U2VjcmV0IjoiTW1xTktmYmJVRmpIUlBaSCJ9.ueoxsw2x4x7f2pOdCo85irXgPOPe3VkZ_QHol_zRdPU"
      },
      body: JSON.stringify(payload),
    });

    console.log("Status:", response.status);

    const data = await response.json();
    console.log(data);
    console.log("Response:", data);

  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}

export default Log;
