# Emulator verification

Local on-device computation using editable numeric inputs.

With 5 mm margins and a 2 mm gap, 50×30 mm labels on A4 give 27 upright or 30 rotated.

21 distinct frames were recorded on firmware 1.3.1. App io.ncoooooper.paperyield exited: finished; heap peak 85.0 of 128 KiB. Screenshots are in screenshots/ and the recording is in media/.

## Display capture

Firmware 1.3.1 rendered both README examples. Each square in a guide GIF is one front LED in a 16 × 16 cell. The production archive was built from the source in this repository.

## Screen transition capture

Firmware 1.3.1 rendered the display sequences in the README. The release archive also ran on a fresh emulator with rapid wheel reversals and Back during a transition. The guide uses a 14 × 14 lit area inside each 16 × 16 cell. Input sequences, frame counts and the release archive checksum are in [the capture record](media/screen-transitions.json).
