<template>
  <canvas
    ref="canvasRef"
    :width="width"
    :height="height"
    :style="{
      position: 'absolute',
      opacity: opacity,
      ...style
    }"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  width: { type: Number, default: 600 },
  height: { type: Number, default: 600 },
  opacity: { type: Number, default: 0.1 },
  positionX: { type: Number, default: 0 },
  positionY: { type: Number, default: 0 },
  scale: { type: Number, default: 600 },
  color: { type: String, default: 'oklch(37.2% 0.044 257.287)' },
  style: { type: Object, default: () => ({}) }
});

const canvasRef = ref(null);
let animationId = null;

const drawPattern = (ctx, width, height) => {
  const centerX = width / 2 + (props.positionX);
  const centerY = height / 2 + (props.positionY);
  let angleOffset = 0;
  const rings = 20; // jumlah lingkaran konsentris
  const maxRadius = Math.min(props.scale, props.scale) / 2 * 0.85;
  const rotationSpeed = 0.002;

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let ring = 1; ring <= rings; ring++) {
      const radius = (ring / rings) * maxRadius;

      // Makin luar, makin banyak titik di ring ini
      const dotsPerRing = Math.floor(6 + ring * 6); // mulai dari 12 titik sampai ~78 titik

      for (let i = 0; i < dotsPerRing; i++) {
        const angle = (i / dotsPerRing) * (2 * Math.PI) + angleOffset;

        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // Ukuran titik: besar di tengah (sekitar 6), kecil di luar
        const dotSize = Math.max(2, 6 - (ring * 0.4)); 

        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = props.color; 
        ctx.fill();
      }
    }

    angleOffset += rotationSpeed;
    animationId = requestAnimationFrame(animate);
  }

  animate();
};



onMounted(() => {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  drawPattern(ctx, props.width, props.height);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>
