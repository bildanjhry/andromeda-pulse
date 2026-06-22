import classNames from "classnames"

export default function SkeletonCard({count = 4, total}){
  return(
    <div className={classNames(
      `grid  gap-3`,
      {'grid-cols-2' : count === 2},
      {'grid-cols-4' : count === 4},
    )}>
      { Array.from({ length: total }).map((item, index) => (
        <div
          key={index}
          className="bg-(--container-bg) border-light rounded-xl
				h-105 overflow-hidden flex flex-col gap-12 items-center">
          <header className="w-full h-[70%] animate-pulse bg-(--skeleton-bg)">
          </header>
          <div className=" w-[70%] h-6 rounded-xl bg-(--skeleton-bg) animate-pulse">
          </div>
        </div>
      ))}
    </div>
  )
}