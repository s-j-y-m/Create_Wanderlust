const AttributeModifierOperation = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const MECHANICAL_HEART_SLOT = 'mechanical_heart'

function mechanicalHeartCurio(speed, modifierName) {
    return CuriosJSCapabilityBuilder.create()
        .canEquip((slotContext, stack) => String(slotContext.identifier()) == MECHANICAL_HEART_SLOT)
        .addAttribute(
            'minecraft:generic.movement_speed',
            modifierName,
            speed,
            AttributeModifierOperation.ADDITION
        )
}

StartupEvents.registry('item', event => {
    event.create('pioneer:test', 'basic')

    event.create('pioneer:wooden_mechanical_heart', 'basic')
        .displayName('木制机械之心')
        .attachCuriosCapability(mechanicalHeartCurio(0.25, 'wooden_mechanical_heart_movement_speed'))
})
