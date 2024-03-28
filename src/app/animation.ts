import { animate, keyframes, query, stagger, style, transition, trigger } from "@angular/animations";

export const livrosStateTrigger = trigger('livrosStateTrigger', [
  transition('* <=> *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-50%)'
      }),
      stagger(300, [
        animate('500ms ease-out', keyframes([
          style({
            opacity: 0.5,
            transform: 'translateY(-25%)',
            offset: 0.3
          }),
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 1
          })
        ])
        )
      ])
    ], {optional: true}),
    query(':leave', [
      stagger(150, [
        animate('500ms ease-in', keyframes([
          style({
            opacity: 1,
            transform: 'translateY(15%)',
            offset: 0.2
          }),
          style({
            opacity: 0,
            transform: 'translateY(-50%)',
            offset: 1
          })
        ]))
      ])
    ], {optional: true})
  ])
])
