export const RenderFrame = () => {
  const view = document.createElement('section')
  view.classList.add('mt-8', 'mx-auto', 'w-full', 'max-w-5xl', 'center')
  const title = document.createElement('h1')
  title.classList.add('text-3xl', 'font-bold', 'text-center', 'mt-8')
  title.textContent = 'Productos'
  content = document.createElement('div')
  content.setAttribute('id', 'content')
  content.classList.add('grid', 'grid-cols-4', 'gap-x-16', 'gap-y-9', 'mt-8', 'justify-items-center')
  return { view, title }
}
