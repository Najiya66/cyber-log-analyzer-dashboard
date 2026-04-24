function analyzeLogs() {
    const logs = [
        {ip: "10.0.0.5", status: "failed"},
        {ip: "192.168.1.10", status: "success"},
        {ip: "10.0.0.5", status: "failed"}
    ];

    let suspicious = {};

    logs.forEach(log => {
        if(log.status === "failed") {
            suspicious[log.ip] = (suspicious[log.ip] || 0) + 1;
        }
    });

    let output = "<h2>Suspicious IPs</h2>";

    for(let ip in suspicious) {
        if(suspicious[ip] >= 2) {
            output += `<p>⚠️ ${ip} - Possible Attack</p>`;
        }
    }

    document.getElementById("output").innerHTML = output;
}
