const mockedMails: {subject: string, preview: string}[] = [
	{
		subject: 'S1',
		preview: 'Hello S1'
	},
	{
		subject: 'S2',
		preview: 'Hello S2'
	}
]

export function SidebarFeat() {
	return (
		<div>	
				{ mockedMails.map((mail, index) => {
					return (
						<div key={index}> 
						<hr />
						Subject: {mail.subject} 
						<br /> 
						Preview: {mail.preview}
						<hr />
						</div>
					);
				}) }
			
		</div>
	);
}