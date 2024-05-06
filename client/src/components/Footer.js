// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				
			</h1>
			<FooterContainer>
				<Row>
                    <Column>
                        <FooterLink href="">
							Home
					    </FooterLink>   
                    </Column>
					<Column>
                        <FooterLink href="pages/About">
							We are a group of ragtag people
					    </FooterLink> 
					</Column>
					<Column>
						<FooterLink >
							Writing
						</FooterLink>
					</Column>
					<Column>
						<FooterLink >
							please never contact us
						</FooterLink>
					</Column>
					
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
