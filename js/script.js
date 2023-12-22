function test() {
    var shopNames = $("#shopNames").val()
    var dateStart = $("#dateStart").val()
    var dateEnd = $("#dateEnd").val()
    console.log(shopNames.split(","))
    $.ajax({
        url: "http://localhost:8080/metrics",
        type: "GET",
        data: {
            shopNames: shopNames,
            dateStart: dateStart,
            dateEnd: dateEnd
        },
        dataType: "json",
        success: function(response) {
            if (response === undefined || response.length == 0) {
                $("#content").html("EMPTY")
                return
            }
            $("#content").html("<thead>\n" +
                "    <tr>\n" +
                "      <th scope=\"col\">Shop name</th>\n" +
                "      <th scope=\"col\">Product added</th>\n" +
                "      <th scope=\"col\">Category added</th>\n" +
                "      <th scope=\"col\">visiting</th>\n" +
                "      <th scope=\"col\">purchases</th>\n" +
                "      <th scope=\"col\">registrations</th>\n" +
                "      <th scope=\"col\">date</th>\n" +
                "    </tr>\n" +
                "  </thead><tbody>")
            response.forEach(metric => {
                console.log(metric)
                $("#content").append("<tr>\n" +
                    "      <th>" + metric["shopName"] + "</th>\n" +
                    "      <th>" + metric["productsAdded"] + "</th>\n" +
                    "      <th>" + metric["categoryUpdated"] + "</th>\n" +
                    "      <th>" + metric["visiting"] + "</th>\n" +
                    "      <th>" + metric["purchases"] + "</th>\n" +
                    "      <th>" + metric["registrations"] + "</th>\n" +
                    "      <th>" + metric["date"] + "</th>\n" +
                    "    </tr>")
            })
            $("#content").append("</tbody>")
        }
    });
}