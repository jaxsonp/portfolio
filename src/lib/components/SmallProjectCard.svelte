<script>
	export let title;
	export let link;
	export let description;
	export let thumbnail;
	export let badges;

	import githubIcon from '$lib/assets/icons/github.svg';
</script>

<div
	class="group p-4 rounded-2xl shadow-transparent-white shadow-light grid transition-transform hover:scale-105"
>
	<img
		class="col-start-1 row-start-1 mt-8 w-full h-40 object-cover gradient-mask-t-0 -z-10"
		alt={thumbnail}
		src="/src/lib/assets/thumbnails/{thumbnail}"
	/>
	<div class="col-start-1 row-start-1 z-10">
		<h3 class="mb-2 leading-none">{title}</h3>
		<p class="italic text-light-gray leading-tight drop-shadow-[0_2px_4px_black]">{description}</p>
	</div>
	<div class="col-start-1 row-start-1 self-end z-10 drop-shadow-[0_0_8px_black]">
		<a href={link} title="Github" target="_blank">
			<img
				class="w-8 scale-0 group-hover:scale-100 transition-transform"
				src={githubIcon}
				alt="Source"
			/>
		</a>
	</div>
</div>
