var url = require('url');

function handleRequest(req, res) {

	var url_parts = url.parse(req.url);

	switch (url_parts.pathname){
		case '/';
			display_root(url_parts.pathname, req, res);
			break;
		case '/portfolio':
			display_portfolio(url_parts.pathname, req, res);
			break;
		case '/edit':
			sys.puts("display edit");
			break;
		default:
			display_404(url_parts.pathname, req, res);
				
	}

}
