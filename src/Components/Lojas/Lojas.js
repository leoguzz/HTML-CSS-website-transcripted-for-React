import React from "react"  
import "./Lojas.css"
import audioUm from '../arq/audio/GuardioesGalaxia.mp3';
import imagemGroot from '../arq/img/groot.png';
import video from '../arq/video/BabyGrootDançando.mp4';
import ImgSite from "../imgSite/imgSite";


export default ()=>
<section class="img-site">
			
				<h1 class="text-center">
					Nossas Lojas
				</h1>
				<p class="text-center lead">
					Lorem ipsum dolor sit amet consectetur adipisicing, elit. Officiis placeat natus consequatur reiciendis soluta nihil itaque corporis repudiandae laudantium dolore. Minima provident cum pariatur, consectetur facere quae aspernatur nobis porro?
				</p>

				<div class="media">
					<div class="box ladoA">
						<audio controls>
							<source src={audioUm}/>
							<p>este seu navegador não suporta está mídia</p>
						</audio>
					</div>

					<div class="box ladoB">
						<video  controls poster={imagemGroot}>
							<source src={video}/>
							<p>este seu navegador não suporta está mídia</p>
						</video>
					</div>
				</div>

			
		</section>