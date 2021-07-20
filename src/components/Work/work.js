import React from "react";
import "./work.css";

function Work() {
    return (
		<div className = "work" id = "work">
			<div class="section-header">
				<div class="section-header-container">
					<div class="section-title">work</div>
					<div class="section-order">/002</div>
				</div>
			</div>

			<div class="divider"></div>

			<section class="project">
				<div class="project-container">
					<div>
						<nav class="menu">
							<div class="menu__item">
							<a class="menu__item-link">Asterisks</a>
							<img class="menu__item-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" />
							<div class="marquee">
								<div class="marquee__inner">
									<span>Asterisks</span>
									<span>Asterisks</span>
									<span>Asterisks</span>
									<span>Asterisks</span>
								</div>
							</div>
							</div>
							<div class="divider"></div>
							<div class="menu__item">
							<a class="menu__item-link">Unlocked</a>
							<img class="menu__item-img" src="https://images.unsplash.com/photo-1583430999204-f9595a23469c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" />
							<div class="marquee">
								<div class="marquee__inner">
									<span>Unlocked</span>
									<span>Unlocked</span>
									<span>Unlocked</span>
									<span>Unlocked</span>
								</div>
							</div>
							</div>
							<div class="divider"></div>
							<div class="menu__item">
							<a class="menu__item-link">Offbeat Radio</a>
							<img class="menu__item-img" src="https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1916&q=80" />
							<div class="marquee">
								<div class="marquee__inner">
									<span>Offbeat Radio</span>
									<span>Offbeat Radio</span>
									<span>Offbeat Radio</span>
									<span>Offbeat Radio</span>
								</div>
							</div>
							</div>
							<div class="divider"></div>
							<div class="menu__item">
							<a class="menu__item-link">Brutal</a>
							<img class="menu__item-img" src="https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1862&q=80" />
							<div class="marquee">
								<div class="marquee__inner">
									<span>Brutal</span>
									<span>Brutal</span>
									<span>Brutal</span>
									<span>Brutal</span>
								</div>
							</div>
							</div>
							<div class="divider"></div>
							<div class="menu__item">
							<a class="menu__item-link">The Crew</a>
							<img class="menu__item-img" src="https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80" />
							<div class="marquee">
								<div class="marquee__inner" aria-hidden="true">
									<span>The Crew</span>
									<span>The Crew</span>
									<span>The Crew</span>
									<span>The Crew</span>
								</div>
							</div>
							</div>
						</nav>
					</div>
				</div>
			</section>

			<div className = "work_info" data-aos = "fade-up">
				<h1>I SOMETIMES DO GREAT WORK OTHER TIMES I DO MEDIOCRE PUSH‑UPS.</h1>
			</div>
		</div>
    );
}

export default Work;