# Panera Free-time: Formatting infos

## Create the sprites

Here is the process I use to create the sprite:

- Copy all pictures from Hugo's export in the sequence folder.
- Apply the necessary effects on the pictures (Photoshop Level for example)
- Rename them sprite_X.png
- Compress them (see below)
- Change the frames number in code (see below)

______

## Image compression

In order to get the optimum file size, here are some transformations applied to the images

### Resize animated frames

There only a few still frames. All the other one can get an extra compression, and it's barely noticeable.
Animated image can be reduced to half the size.

The software (Pngyu)[http://nukesaq88.github.io/Pngyu/] allows to batch process this compression

### Change the number of colors in the PNG

I noticed that animated images can be reduced to 16 colors, and the still one between 32 and 64. Then use TinyPNG.


## Changing the number of frames

If you change the total number of frames, there are several things you'll need to update.

- The loop that add the images to the preload array
- The config.max value in the Sprite object
- In the main timeline, update the number of the keyframes: `.call(sprite.to, [28], sprite, "label")`


From Axel