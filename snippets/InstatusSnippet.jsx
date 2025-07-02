export const InstatusSnippet = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const url = "https://status.dovetail.com/summary.json";
    const getStatus = async () => {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const status = data.page.status;
        if (status === "UP") {
          setStatus({
            message: "All systems operational",
            color: "#00C777",
          });
        } else if (status === "HASISSUES") {
          setStatus({
            message: "Issues detected",
            color: "#e64632",
          });
        } else if (status === "UNDERMAINTENANCE") {
          setStatus({
            message: "Under maintenance",
            color: "#FF5C00",
          });
        } else {
          setStatus(null);
        }
      } else {
        setStatus(null);
      }
    };

    void getStatus();
  }, []);

  return (
    <div>
      {status ? (
        <a
          style={{
            color: status.color,
            display: "flex",
            gap: "8px",
            alignItems: "center",
            textDecoration: "none",
            border: "none",
          }}
          href={"https://status.dovetail.com/"}
        >
          <div style={{ color: status.color }}>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                fill="currentColor"
              />
            </svg>
          </div>
          {status.message}
        </a>
      ) : null}
    </div>
  );
};
