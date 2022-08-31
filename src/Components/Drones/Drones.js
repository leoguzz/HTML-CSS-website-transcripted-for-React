import React from "react"  
import "./Drones.css"
import dois from '../arq/img/02.png';
import tres from '../arq/img/03.png';
import quatro from '../arq/img/04.png';

export default ()=>			
<div class="container">
				<h1 class="text-center">
					Melhores Drones
				</h1>
				<p class="text-center lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error accusantium laborum, hic nisi soluta quasi veritatis quod quam, architecto voluptatibus quibusdam quisquam consequuntur eum doloribus impedit aperiam nobis libero!
				</p>

				
				<div class="box">
					<div class="thumbnail">
						<img src={dois} alt=""/>
						<div class="text-center">
							<h3>Phantom</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum!</p>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="thumbnail">
						<img src={tres} alt=""/>
						<div class="text-center">
							<h3>Mavic</h3>
							<p>Corporis quas obcaecati quia provident accusantium officiis eaque repudiandae error.</p>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="thumbnail">
						<img src={quatro} alt=""/>
						<div class="text-center">
							<h3>Inspire</h3>
							<p>Expedita aut dignissimos obcaecati animi recusandae! Dicta eaque ipsa asperiores!</p>
						</div>
					</div>
				</div>
			</div>				
